# `vpcPeeringConnectionAccepterV2` Submodule <a name="`vpcPeeringConnectionAccepterV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionAccepterV2 <a name="VpcPeeringConnectionAccepterV2" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2 opentelekomcloud_vpc_peering_connection_accepter_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

new vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2(scope: Construct, id: string, config: VpcPeeringConnectionAccepterV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config">VpcPeeringConnectionAccepterV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config">VpcPeeringConnectionAccepterV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetAccept">resetAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcPeeringConnectionAccepterV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a>

---

##### `resetAccept` <a name="resetAccept" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetAccept"></a>

```typescript
public resetAccept(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcPeeringConnectionAccepterV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isConstruct"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformElement"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformResource"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcPeeringConnectionAccepterV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcPeeringConnectionAccepterV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcPeeringConnectionAccepterV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcPeeringConnectionAccepterV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.peerTenantId">peerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference">VpcPeeringConnectionAccepterV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.acceptInput">acceptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.accept">accept</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.peerTenantId"></a>

```typescript
public readonly peerTenantId: string;
```

- *Type:* string

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionAccepterV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference">VpcPeeringConnectionAccepterV2TimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `acceptInput`<sup>Optional</sup> <a name="acceptInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.acceptInput"></a>

```typescript
public readonly acceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcPeeringConnectionAccepterV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a>

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `accept`<sup>Required</sup> <a name="accept" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.accept"></a>

```typescript
public readonly accept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepterV2Config <a name="VpcPeeringConnectionAccepterV2Config" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

const vpcPeeringConnectionAccepterV2Config: vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#vpc_peering_connection_id VpcPeeringConnectionAccepterV2#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.accept">accept</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#accept VpcPeeringConnectionAccepterV2#accept}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#id VpcPeeringConnectionAccepterV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#region VpcPeeringConnectionAccepterV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#vpc_peering_connection_id VpcPeeringConnectionAccepterV2#vpc_peering_connection_id}.

---

##### `accept`<sup>Optional</sup> <a name="accept" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.accept"></a>

```typescript
public readonly accept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#accept VpcPeeringConnectionAccepterV2#accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#id VpcPeeringConnectionAccepterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#region VpcPeeringConnectionAccepterV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionAccepterV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#timeouts VpcPeeringConnectionAccepterV2#timeouts}

---

### VpcPeeringConnectionAccepterV2Timeouts <a name="VpcPeeringConnectionAccepterV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

const vpcPeeringConnectionAccepterV2Timeouts: vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#create VpcPeeringConnectionAccepterV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#delete VpcPeeringConnectionAccepterV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#create VpcPeeringConnectionAccepterV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/vpc_peering_connection_accepter_v2#delete VpcPeeringConnectionAccepterV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterV2TimeoutsOutputReference <a name="VpcPeeringConnectionAccepterV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnectionAccepterV2 } from '@cdktf/provider-opentelekomcloud'

new vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcPeeringConnectionAccepterV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpcPeeringConnectionAccepterV2.VpcPeeringConnectionAccepterV2Timeouts">VpcPeeringConnectionAccepterV2Timeouts</a>

---



