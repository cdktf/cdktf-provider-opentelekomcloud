# `cfwServiceGroupMemberV1` Submodule <a name="`cfwServiceGroupMemberV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwServiceGroupMemberV1 <a name="CfwServiceGroupMemberV1" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1 opentelekomcloud_cfw_service_group_member_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

new cfwServiceGroupMemberV1.CfwServiceGroupMemberV1(scope: Construct, id: string, config: CfwServiceGroupMemberV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config">CfwServiceGroupMemberV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config">CfwServiceGroupMemberV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CfwServiceGroupMemberV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwServiceGroupMemberV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isConstruct"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformElement"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformResource"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CfwServiceGroupMemberV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwServiceGroupMemberV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwServiceGroupMemberV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwServiceGroupMemberV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference">CfwServiceGroupMemberV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.destPortInput">destPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.setIdInput">setIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.sourcePortInput">sourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.destPort">destPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.setId">setId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.timeouts"></a>

```typescript
public readonly timeouts: CfwServiceGroupMemberV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference">CfwServiceGroupMemberV1TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destPortInput`<sup>Optional</sup> <a name="destPortInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.destPortInput"></a>

```typescript
public readonly destPortInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `setIdInput`<sup>Optional</sup> <a name="setIdInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.setIdInput"></a>

```typescript
public readonly setIdInput: string;
```

- *Type:* string

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CfwServiceGroupMemberV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `setId`<sup>Required</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.setId"></a>

```typescript
public readonly setId: string;
```

- *Type:* string

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwServiceGroupMemberV1Config <a name="CfwServiceGroupMemberV1Config" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.Initializer"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

const cfwServiceGroupMemberV1Config: cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.destPort">destPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#dest_port CfwServiceGroupMemberV1#dest_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#protocol CfwServiceGroupMemberV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.setId">setId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#set_id CfwServiceGroupMemberV1#set_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.sourcePort">sourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#source_port CfwServiceGroupMemberV1#source_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#description CfwServiceGroupMemberV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destPort`<sup>Required</sup> <a name="destPort" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.destPort"></a>

```typescript
public readonly destPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#dest_port CfwServiceGroupMemberV1#dest_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#protocol CfwServiceGroupMemberV1#protocol}.

---

##### `setId`<sup>Required</sup> <a name="setId" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.setId"></a>

```typescript
public readonly setId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#set_id CfwServiceGroupMemberV1#set_id}.

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#source_port CfwServiceGroupMemberV1#source_port}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#description CfwServiceGroupMemberV1#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CfwServiceGroupMemberV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#timeouts CfwServiceGroupMemberV1#timeouts}

---

### CfwServiceGroupMemberV1Timeouts <a name="CfwServiceGroupMemberV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.Initializer"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

const cfwServiceGroupMemberV1Timeouts: cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#create CfwServiceGroupMemberV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#delete CfwServiceGroupMemberV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#update CfwServiceGroupMemberV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#create CfwServiceGroupMemberV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#delete CfwServiceGroupMemberV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cfw_service_group_member_v1#update CfwServiceGroupMemberV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwServiceGroupMemberV1TimeoutsOutputReference <a name="CfwServiceGroupMemberV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cfwServiceGroupMemberV1 } from '@cdktf/provider-opentelekomcloud'

new cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwServiceGroupMemberV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwServiceGroupMemberV1.CfwServiceGroupMemberV1Timeouts">CfwServiceGroupMemberV1Timeouts</a>

---



