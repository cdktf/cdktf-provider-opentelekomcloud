# `asLifecycleHookV1` Submodule <a name="`asLifecycleHookV1` Submodule" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsLifecycleHookV1 <a name="AsLifecycleHookV1" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1 opentelekomcloud_as_lifecycle_hook_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

new asLifecycleHookV1.AsLifecycleHookV1(scope: Construct, id: string, config: AsLifecycleHookV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config">AsLifecycleHookV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult">resetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout">resetDefaultTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata">resetNotificationMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultResult` <a name="resetDefaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultResult"></a>

```typescript
public resetDefaultResult(): void
```

##### `resetDefaultTimeout` <a name="resetDefaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetDefaultTimeout"></a>

```typescript
public resetDefaultTimeout(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationMetadata` <a name="resetNotificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.resetNotificationMetadata"></a>

```typescript
public resetNotificationMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

asLifecycleHookV1.AsLifecycleHookV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AsLifecycleHookV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsLifecycleHookV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsLifecycleHookV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsLifecycleHookV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName">notificationTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput">defaultResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput">defaultTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput">notificationMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput">notificationTopicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput">scalingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput">scalingLifecycleHookNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput">scalingLifecycleHookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult">defaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout">defaultTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn">notificationTopicUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId">scalingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName">scalingLifecycleHookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType">scalingLifecycleHookType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `notificationTopicName`<sup>Required</sup> <a name="notificationTopicName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicName"></a>

```typescript
public readonly notificationTopicName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `defaultResultInput`<sup>Optional</sup> <a name="defaultResultInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResultInput"></a>

```typescript
public readonly defaultResultInput: string;
```

- *Type:* string

---

##### `defaultTimeoutInput`<sup>Optional</sup> <a name="defaultTimeoutInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeoutInput"></a>

```typescript
public readonly defaultTimeoutInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationMetadataInput`<sup>Optional</sup> <a name="notificationMetadataInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadataInput"></a>

```typescript
public readonly notificationMetadataInput: string;
```

- *Type:* string

---

##### `notificationTopicUrnInput`<sup>Optional</sup> <a name="notificationTopicUrnInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrnInput"></a>

```typescript
public readonly notificationTopicUrnInput: string;
```

- *Type:* string

---

##### `scalingGroupIdInput`<sup>Optional</sup> <a name="scalingGroupIdInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupIdInput"></a>

```typescript
public readonly scalingGroupIdInput: string;
```

- *Type:* string

---

##### `scalingLifecycleHookNameInput`<sup>Optional</sup> <a name="scalingLifecycleHookNameInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookNameInput"></a>

```typescript
public readonly scalingLifecycleHookNameInput: string;
```

- *Type:* string

---

##### `scalingLifecycleHookTypeInput`<sup>Optional</sup> <a name="scalingLifecycleHookTypeInput" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookTypeInput"></a>

```typescript
public readonly scalingLifecycleHookTypeInput: string;
```

- *Type:* string

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

---

##### `defaultTimeout`<sup>Required</sup> <a name="defaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.defaultTimeout"></a>

```typescript
public readonly defaultTimeout: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

---

##### `notificationTopicUrn`<sup>Required</sup> <a name="notificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.notificationTopicUrn"></a>

```typescript
public readonly notificationTopicUrn: string;
```

- *Type:* string

---

##### `scalingGroupId`<sup>Required</sup> <a name="scalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingGroupId"></a>

```typescript
public readonly scalingGroupId: string;
```

- *Type:* string

---

##### `scalingLifecycleHookName`<sup>Required</sup> <a name="scalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookName"></a>

```typescript
public readonly scalingLifecycleHookName: string;
```

- *Type:* string

---

##### `scalingLifecycleHookType`<sup>Required</sup> <a name="scalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.scalingLifecycleHookType"></a>

```typescript
public readonly scalingLifecycleHookType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsLifecycleHookV1Config <a name="AsLifecycleHookV1Config" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.Initializer"></a>

```typescript
import { asLifecycleHookV1 } from '@cdktf/provider-opentelekomcloud'

const asLifecycleHookV1Config: asLifecycleHookV1.AsLifecycleHookV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn">notificationTopicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId">scalingGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName">scalingLifecycleHookName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType">scalingLifecycleHookType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult">defaultResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout">defaultTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notificationTopicUrn`<sup>Required</sup> <a name="notificationTopicUrn" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationTopicUrn"></a>

```typescript
public readonly notificationTopicUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_topic_urn AsLifecycleHookV1#notification_topic_urn}.

---

##### `scalingGroupId`<sup>Required</sup> <a name="scalingGroupId" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingGroupId"></a>

```typescript
public readonly scalingGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_group_id AsLifecycleHookV1#scaling_group_id}.

---

##### `scalingLifecycleHookName`<sup>Required</sup> <a name="scalingLifecycleHookName" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookName"></a>

```typescript
public readonly scalingLifecycleHookName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_name AsLifecycleHookV1#scaling_lifecycle_hook_name}.

---

##### `scalingLifecycleHookType`<sup>Required</sup> <a name="scalingLifecycleHookType" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.scalingLifecycleHookType"></a>

```typescript
public readonly scalingLifecycleHookType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#scaling_lifecycle_hook_type AsLifecycleHookV1#scaling_lifecycle_hook_type}.

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_result AsLifecycleHookV1#default_result}.

---

##### `defaultTimeout`<sup>Optional</sup> <a name="defaultTimeout" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.defaultTimeout"></a>

```typescript
public readonly defaultTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#default_timeout AsLifecycleHookV1#default_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#id AsLifecycleHookV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktf/provider-opentelekomcloud.asLifecycleHookV1.AsLifecycleHookV1Config.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/as_lifecycle_hook_v1#notification_metadata AsLifecycleHookV1#notification_metadata}.

---



