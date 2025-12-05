# `privateNatDnatRuleV3` Submodule <a name="`privateNatDnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNatDnatRuleV3 <a name="PrivateNatDnatRuleV3" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3 opentelekomcloud_private_nat_dnat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new privateNatDnatRuleV3.PrivateNatDnatRuleV3(scope: Construct, id: string, config: PrivateNatDnatRuleV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config">PrivateNatDnatRuleV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config">PrivateNatDnatRuleV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort">resetInternalServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort">resetTransitServicePort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateNatDnatRuleV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInternalServicePort` <a name="resetInternalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort"></a>

```typescript
public resetInternalServicePort(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitServicePort` <a name="resetTransitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort"></a>

```typescript
public resetTransitServicePort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateNatDnatRuleV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateNatDnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateNatDnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput">internalServicePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput">transitIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput">transitServicePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort">internalServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId">transitIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort">transitServicePort</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateNatDnatRuleV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `internalServicePortInput`<sup>Optional</sup> <a name="internalServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput"></a>

```typescript
public readonly internalServicePortInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateNatDnatRuleV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `transitIpIdInput`<sup>Optional</sup> <a name="transitIpIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput"></a>

```typescript
public readonly transitIpIdInput: string;
```

- *Type:* string

---

##### `transitServicePortInput`<sup>Optional</sup> <a name="transitServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput"></a>

```typescript
public readonly transitServicePortInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `internalServicePort`<sup>Required</sup> <a name="internalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort"></a>

```typescript
public readonly internalServicePort: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId"></a>

```typescript
public readonly transitIpId: string;
```

- *Type:* string

---

##### `transitServicePort`<sup>Required</sup> <a name="transitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort"></a>

```typescript
public readonly transitServicePort: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNatDnatRuleV3Config <a name="PrivateNatDnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.Initializer"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

const privateNatDnatRuleV3Config: privateNatDnatRuleV3.PrivateNatDnatRuleV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId">transitIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort">internalServicePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort">transitServicePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}.

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId"></a>

```typescript
public readonly transitIpId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}.

---

##### `internalServicePort`<sup>Optional</sup> <a name="internalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort"></a>

```typescript
public readonly internalServicePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateNatDnatRuleV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#timeouts PrivateNatDnatRuleV3#timeouts}

---

##### `transitServicePort`<sup>Optional</sup> <a name="transitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort"></a>

```typescript
public readonly transitServicePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}.

---

### PrivateNatDnatRuleV3Timeouts <a name="PrivateNatDnatRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.Initializer"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

const privateNatDnatRuleV3Timeouts: privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNatDnatRuleV3TimeoutsOutputReference <a name="PrivateNatDnatRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { privateNatDnatRuleV3 } from '@cdktf/provider-opentelekomcloud'

new privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateNatDnatRuleV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---



