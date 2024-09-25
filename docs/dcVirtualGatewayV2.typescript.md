# `dcVirtualGatewayV2` Submodule <a name="`dcVirtualGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualGatewayV2 <a name="DcVirtualGatewayV2" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2 opentelekomcloud_dc_virtual_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualGatewayV2.DcVirtualGatewayV2(scope: Construct, id: string, config: DcVirtualGatewayV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config">DcVirtualGatewayV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup">putLocalEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6">putLocalEpGroupV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroup">resetLocalEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroupV6">resetLocalEpGroupV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId">resetRedundantDeviceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalEpGroup` <a name="putLocalEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup"></a>

```typescript
public putLocalEpGroup(value: DcVirtualGatewayV2LocalEpGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

---

##### `putLocalEpGroupV6` <a name="putLocalEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6"></a>

```typescript
public putLocalEpGroupV6(value: DcVirtualGatewayV2LocalEpGroupV6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.putLocalEpGroupV6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

---

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetAsn"></a>

```typescript
public resetAsn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalEpGroup` <a name="resetLocalEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroup"></a>

```typescript
public resetLocalEpGroup(): void
```

##### `resetLocalEpGroupV6` <a name="resetLocalEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetLocalEpGroupV6"></a>

```typescript
public resetLocalEpGroupV6(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRedundantDeviceId` <a name="resetRedundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.resetRedundantDeviceId"></a>

```typescript
public resetRedundantDeviceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcVirtualGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualGatewayV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroup">localEpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference">DcVirtualGatewayV2LocalEpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId">localEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIpv6Id">localEpGroupIpv6Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6">localEpGroupV6</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference">DcVirtualGatewayV2LocalEpGroupV6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupInput">localEpGroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6Input">localEpGroupV6Input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput">redundantDeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId">redundantDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localEpGroup`<sup>Required</sup> <a name="localEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroup"></a>

```typescript
public readonly localEpGroup: DcVirtualGatewayV2LocalEpGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference">DcVirtualGatewayV2LocalEpGroupOutputReference</a>

---

##### `localEpGroupId`<sup>Required</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupId"></a>

```typescript
public readonly localEpGroupId: string;
```

- *Type:* string

---

##### `localEpGroupIpv6Id`<sup>Required</sup> <a name="localEpGroupIpv6Id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupIpv6Id"></a>

```typescript
public readonly localEpGroupIpv6Id: string;
```

- *Type:* string

---

##### `localEpGroupV6`<sup>Required</sup> <a name="localEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6"></a>

```typescript
public readonly localEpGroupV6: DcVirtualGatewayV2LocalEpGroupV6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference">DcVirtualGatewayV2LocalEpGroupV6OutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localEpGroupInput`<sup>Optional</sup> <a name="localEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupInput"></a>

```typescript
public readonly localEpGroupInput: DcVirtualGatewayV2LocalEpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

---

##### `localEpGroupV6Input`<sup>Optional</sup> <a name="localEpGroupV6Input" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.localEpGroupV6Input"></a>

```typescript
public readonly localEpGroupV6Input: DcVirtualGatewayV2LocalEpGroupV6;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `redundantDeviceIdInput`<sup>Optional</sup> <a name="redundantDeviceIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceIdInput"></a>

```typescript
public readonly redundantDeviceIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `redundantDeviceId`<sup>Required</sup> <a name="redundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.redundantDeviceId"></a>

```typescript
public readonly redundantDeviceId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualGatewayV2Config <a name="DcVirtualGatewayV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualGatewayV2Config: dcVirtualGatewayV2.DcVirtualGatewayV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroup">localEpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | local_ep_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupV6">localEpGroupV6</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | local_ep_group_v6 block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId">redundantDeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#vpc_id DcVirtualGatewayV2#vpc_id}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#asn DcVirtualGatewayV2#asn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#device_id DcVirtualGatewayV2#device_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#id DcVirtualGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localEpGroup`<sup>Optional</sup> <a name="localEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroup"></a>

```typescript
public readonly localEpGroup: DcVirtualGatewayV2LocalEpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

local_ep_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#local_ep_group DcVirtualGatewayV2#local_ep_group}

---

##### `localEpGroupV6`<sup>Optional</sup> <a name="localEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.localEpGroupV6"></a>

```typescript
public readonly localEpGroupV6: DcVirtualGatewayV2LocalEpGroupV6;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

local_ep_group_v6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#local_ep_group_v6 DcVirtualGatewayV2#local_ep_group_v6}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#project_id DcVirtualGatewayV2#project_id}.

---

##### `redundantDeviceId`<sup>Optional</sup> <a name="redundantDeviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2Config.property.redundantDeviceId"></a>

```typescript
public readonly redundantDeviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#redundant_device_id DcVirtualGatewayV2#redundant_device_id}.

---

### DcVirtualGatewayV2LocalEpGroup <a name="DcVirtualGatewayV2LocalEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualGatewayV2LocalEpGroup: dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.endpoints">endpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

### DcVirtualGatewayV2LocalEpGroupV6 <a name="DcVirtualGatewayV2LocalEpGroupV6" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualGatewayV2LocalEpGroupV6: dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.endpoints">endpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#endpoints DcVirtualGatewayV2#endpoints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#description DcVirtualGatewayV2#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#name DcVirtualGatewayV2#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/dc_virtual_gateway_v2#type DcVirtualGatewayV2#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcVirtualGatewayV2LocalEpGroupOutputReference <a name="DcVirtualGatewayV2LocalEpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpointsInput">endpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpoints">endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DcVirtualGatewayV2LocalEpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroup">DcVirtualGatewayV2LocalEpGroup</a>

---


### DcVirtualGatewayV2LocalEpGroupV6OutputReference <a name="DcVirtualGatewayV2LocalEpGroupV6OutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer"></a>

```typescript
import { dcVirtualGatewayV2 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpointsInput">endpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpoints">endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DcVirtualGatewayV2LocalEpGroupV6;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualGatewayV2.DcVirtualGatewayV2LocalEpGroupV6">DcVirtualGatewayV2LocalEpGroupV6</a>

---



