# `dmsReassignPartitionsV2` Submodule <a name="`dmsReassignPartitionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReassignPartitionsV2 <a name="DmsReassignPartitionsV2" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2 opentelekomcloud_dms_reassign_partitions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

new dmsReassignPartitionsV2.DmsReassignPartitionsV2(scope: Construct, id: string, config: DmsReassignPartitionsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config">DmsReassignPartitionsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config">DmsReassignPartitionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments">putReassignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt">resetExecuteAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule">resetIsSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle">resetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate">resetTimeEstimate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReassignments` <a name="putReassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments"></a>

```typescript
public putReassignments(value: IResolvable | DmsReassignPartitionsV2Reassignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.putReassignments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]

---

##### `resetExecuteAt` <a name="resetExecuteAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetExecuteAt"></a>

```typescript
public resetExecuteAt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSchedule` <a name="resetIsSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetIsSchedule"></a>

```typescript
public resetIsSchedule(): void
```

##### `resetThrottle` <a name="resetThrottle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetThrottle"></a>

```typescript
public resetThrottle(): void
```

##### `resetTimeEstimate` <a name="resetTimeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.resetTimeEstimate"></a>

```typescript
public resetTimeEstimate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReassignPartitionsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReassignPartitionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsReassignPartitionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments">reassignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime">reassignmentTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput">executeAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput">isScheduleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput">reassignmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput">throttleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput">timeEstimateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt">executeAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule">isSchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate">timeEstimate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `reassignments`<sup>Required</sup> <a name="reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignments"></a>

```typescript
public readonly reassignments: DmsReassignPartitionsV2ReassignmentsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList">DmsReassignPartitionsV2ReassignmentsList</a>

---

##### `reassignmentTime`<sup>Required</sup> <a name="reassignmentTime" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentTime"></a>

```typescript
public readonly reassignmentTime: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `executeAtInput`<sup>Optional</sup> <a name="executeAtInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAtInput"></a>

```typescript
public readonly executeAtInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `isScheduleInput`<sup>Optional</sup> <a name="isScheduleInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isScheduleInput"></a>

```typescript
public readonly isScheduleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignmentsInput`<sup>Optional</sup> <a name="reassignmentsInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.reassignmentsInput"></a>

```typescript
public readonly reassignmentsInput: IResolvable | DmsReassignPartitionsV2Reassignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttleInput"></a>

```typescript
public readonly throttleInput: number;
```

- *Type:* number

---

##### `timeEstimateInput`<sup>Optional</sup> <a name="timeEstimateInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimateInput"></a>

```typescript
public readonly timeEstimateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executeAt`<sup>Required</sup> <a name="executeAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.executeAt"></a>

```typescript
public readonly executeAt: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `isSchedule`<sup>Required</sup> <a name="isSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.isSchedule"></a>

```typescript
public readonly isSchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.timeEstimate"></a>

```typescript
public readonly timeEstimate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReassignPartitionsV2Config <a name="DmsReassignPartitionsV2Config" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

const dmsReassignPartitionsV2Config: dmsReassignPartitionsV2.DmsReassignPartitionsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments">reassignments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]</code> | reassignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt">executeAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule">isSchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle">throttle</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate">timeEstimate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}.

---

##### `reassignments`<sup>Required</sup> <a name="reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.reassignments"></a>

```typescript
public readonly reassignments: IResolvable | DmsReassignPartitionsV2Reassignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]

reassignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#reassignments DmsReassignPartitionsV2#reassignments}

---

##### `executeAt`<sup>Optional</sup> <a name="executeAt" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.executeAt"></a>

```typescript
public readonly executeAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSchedule`<sup>Optional</sup> <a name="isSchedule" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.isSchedule"></a>

```typescript
public readonly isSchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}.

---

##### `timeEstimate`<sup>Optional</sup> <a name="timeEstimate" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Config.property.timeEstimate"></a>

```typescript
public readonly timeEstimate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}.

---

### DmsReassignPartitionsV2Reassignments <a name="DmsReassignPartitionsV2Reassignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

const dmsReassignPartitionsV2Reassignments: dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments">assignments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]</code> | assignments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers">brokers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}.

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.assignments"></a>

```typescript
public readonly assignments: IResolvable | DmsReassignPartitionsV2ReassignmentsAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]

assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#assignments DmsReassignPartitionsV2#assignments}

---

##### `brokers`<sup>Optional</sup> <a name="brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.brokers"></a>

```typescript
public readonly brokers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}.

---

### DmsReassignPartitionsV2ReassignmentsAssignments <a name="DmsReassignPartitionsV2ReassignmentsAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

const dmsReassignPartitionsV2ReassignmentsAssignments: dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition">partition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers">partitionBrokers</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}. |

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}.

---

##### `partitionBrokers`<sup>Optional</sup> <a name="partitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments.property.partitionBrokers"></a>

```typescript
public readonly partitionBrokers: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReassignPartitionsV2ReassignmentsAssignmentsList <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

new dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get"></a>

```typescript
public get(index: number): DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReassignPartitionsV2ReassignmentsAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]

---


### DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

new dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers">resetPartitionBrokers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPartitionBrokers` <a name="resetPartitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.resetPartitionBrokers"></a>

```typescript
public resetPartitionBrokers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput">partitionBrokersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers">partitionBrokers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionBrokersInput`<sup>Optional</sup> <a name="partitionBrokersInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokersInput"></a>

```typescript
public readonly partitionBrokersInput: number[];
```

- *Type:* number[]

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `partitionBrokers`<sup>Required</sup> <a name="partitionBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.partitionBrokers"></a>

```typescript
public readonly partitionBrokers: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReassignPartitionsV2ReassignmentsAssignments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>

---


### DmsReassignPartitionsV2ReassignmentsList <a name="DmsReassignPartitionsV2ReassignmentsList" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

new dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get"></a>

```typescript
public get(index: number): DmsReassignPartitionsV2ReassignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReassignPartitionsV2Reassignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>[]

---


### DmsReassignPartitionsV2ReassignmentsOutputReference <a name="DmsReassignPartitionsV2ReassignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer"></a>

```typescript
import { dmsReassignPartitionsV2 } from '@cdktf/provider-opentelekomcloud'

new dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments">putAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments">resetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers">resetBrokers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssignments` <a name="putAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments"></a>

```typescript
public putAssignments(value: IResolvable | DmsReassignPartitionsV2ReassignmentsAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.putAssignments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]

---

##### `resetAssignments` <a name="resetAssignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetAssignments"></a>

```typescript
public resetAssignments(): void
```

##### `resetBrokers` <a name="resetBrokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetBrokers"></a>

```typescript
public resetBrokers(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments">assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput">assignmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput">brokersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers">brokers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignments"></a>

```typescript
public readonly assignments: DmsReassignPartitionsV2ReassignmentsAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignmentsList">DmsReassignPartitionsV2ReassignmentsAssignmentsList</a>

---

##### `assignmentsInput`<sup>Optional</sup> <a name="assignmentsInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.assignmentsInput"></a>

```typescript
public readonly assignmentsInput: IResolvable | DmsReassignPartitionsV2ReassignmentsAssignments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsAssignments">DmsReassignPartitionsV2ReassignmentsAssignments</a>[]

---

##### `brokersInput`<sup>Optional</sup> <a name="brokersInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokersInput"></a>

```typescript
public readonly brokersInput: number[];
```

- *Type:* number[]

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `brokers`<sup>Required</sup> <a name="brokers" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.brokers"></a>

```typescript
public readonly brokers: number[];
```

- *Type:* number[]

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2ReassignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReassignPartitionsV2Reassignments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsReassignPartitionsV2.DmsReassignPartitionsV2Reassignments">DmsReassignPartitionsV2Reassignments</a>

---



