# `enterpriseVpnCustomerGatewayV5` Submodule <a name="`enterpriseVpnCustomerGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnCustomerGatewayV5 <a name="EnterpriseVpnCustomerGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5 opentelekomcloud_enterprise_vpn_customer_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5(scope: Construct, id: string, config: EnterpriseVpnCustomerGatewayV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType">resetIdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue">resetIdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn"></a>

```typescript
public resetAsn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdType` <a name="resetIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType"></a>

```typescript
public resetIdType(): void
```

##### `resetIdValue` <a name="resetIdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue"></a>

```typescript
public resetIdValue(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseVpnCustomerGatewayV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseVpnCustomerGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnCustomerGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode">routeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput">idTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput">idValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType">idType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue">idValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idTypeInput`<sup>Optional</sup> <a name="idTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput"></a>

```typescript
public readonly idTypeInput: string;
```

- *Type:* string

---

##### `idValueInput`<sup>Optional</sup> <a name="idValueInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput"></a>

```typescript
public readonly idValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idType`<sup>Required</sup> <a name="idType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType"></a>

```typescript
public readonly idType: string;
```

- *Type:* string

---

##### `idValue`<sup>Required</sup> <a name="idValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue"></a>

```typescript
public readonly idValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnCustomerGatewayV5Config <a name="EnterpriseVpnCustomerGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.Initializer"></a>

```typescript
import { enterpriseVpnCustomerGatewayV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnCustomerGatewayV5Config: enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType">idType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue">idValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idType`<sup>Optional</sup> <a name="idType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType"></a>

```typescript
public readonly idType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}.

---

##### `idValue`<sup>Optional</sup> <a name="idValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue"></a>

```typescript
public readonly idValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}.

---



