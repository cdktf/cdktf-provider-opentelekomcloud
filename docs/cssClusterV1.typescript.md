# `cssClusterV1` Submodule <a name="`cssClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssClusterV1 <a name="CssClusterV1" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1 opentelekomcloud_css_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1(scope: Construct, id: string, config: CssClusterV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config">CssClusterV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config">CssClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetAdminPass">resetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableAuthority">resetEnableAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableHttps">resetEnableHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetExpectNodeNum">resetExpectNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore"></a>

```typescript
public putDatastore(value: CssClusterV1Datastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig"></a>

```typescript
public putNodeConfig(value: CssClusterV1NodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CssClusterV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---

##### `resetAdminPass` <a name="resetAdminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetAdminPass"></a>

```typescript
public resetAdminPass(): void
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetEnableAuthority` <a name="resetEnableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableAuthority"></a>

```typescript
public resetEnableAuthority(): void
```

##### `resetEnableHttps` <a name="resetEnableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableHttps"></a>

```typescript
public resetEnableHttps(): void
```

##### `resetExpectNodeNum` <a name="resetExpectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetExpectNodeNum"></a>

```typescript
public resetExpectNodeNum(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CssClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

cssClusterV1.CssClusterV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

cssClusterV1.CssClusterV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

cssClusterV1.CssClusterV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

cssClusterV1.CssClusterV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CssClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CssClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CssClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CssClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference">CssClusterV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference">CssClusterV1NodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList">CssClusterV1NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference">CssClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPassInput">adminPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthorityInput">enableAuthorityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttpsInput">enableHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNumInput">expectNodeNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPass">adminPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthority">enableAuthority</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttps">enableHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNum">expectNodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastore"></a>

```typescript
public readonly datastore: CssClusterV1DatastoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference">CssClusterV1DatastoreOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: CssClusterV1NodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference">CssClusterV1NodeConfigOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodes"></a>

```typescript
public readonly nodes: CssClusterV1NodesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList">CssClusterV1NodesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeouts"></a>

```typescript
public readonly timeouts: CssClusterV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference">CssClusterV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `adminPassInput`<sup>Optional</sup> <a name="adminPassInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPassInput"></a>

```typescript
public readonly adminPassInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: CssClusterV1Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---

##### `enableAuthorityInput`<sup>Optional</sup> <a name="enableAuthorityInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthorityInput"></a>

```typescript
public readonly enableAuthorityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHttpsInput`<sup>Optional</sup> <a name="enableHttpsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttpsInput"></a>

```typescript
public readonly enableHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expectNodeNumInput`<sup>Optional</sup> <a name="expectNodeNumInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNumInput"></a>

```typescript
public readonly expectNodeNumInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: CssClusterV1NodeConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CssClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---

##### `adminPass`<sup>Required</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPass"></a>

```typescript
public readonly adminPass: string;
```

- *Type:* string

---

##### `enableAuthority`<sup>Required</sup> <a name="enableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthority"></a>

```typescript
public readonly enableAuthority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHttps`<sup>Required</sup> <a name="enableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttps"></a>

```typescript
public readonly enableHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expectNodeNum`<sup>Required</sup> <a name="expectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNum"></a>

```typescript
public readonly expectNodeNum: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CssClusterV1Config <a name="CssClusterV1Config" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1Config: cssClusterV1.CssClusterV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#name CssClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.adminPass">adminPass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableAuthority">enableAuthority</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableHttps">enableHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.expectNodeNum">expectNodeNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#id CssClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#tags CssClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#name CssClusterV1#name}.

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: CssClusterV1NodeConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#node_config CssClusterV1#node_config}

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.adminPass"></a>

```typescript
public readonly adminPass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.datastore"></a>

```typescript
public readonly datastore: CssClusterV1Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#datastore CssClusterV1#datastore}

---

##### `enableAuthority`<sup>Optional</sup> <a name="enableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableAuthority"></a>

```typescript
public readonly enableAuthority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}.

---

##### `enableHttps`<sup>Optional</sup> <a name="enableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableHttps"></a>

```typescript
public readonly enableHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}.

---

##### `expectNodeNum`<sup>Optional</sup> <a name="expectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.expectNodeNum"></a>

```typescript
public readonly expectNodeNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#id CssClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#tags CssClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CssClusterV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#timeouts CssClusterV1#timeouts}

---

### CssClusterV1Datastore <a name="CssClusterV1Datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1Datastore: cssClusterV1.CssClusterV1Datastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#type CssClusterV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#version CssClusterV1#version}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#type CssClusterV1#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#version CssClusterV1#version}.

---

### CssClusterV1NodeConfig <a name="CssClusterV1NodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1NodeConfig: cssClusterV1.CssClusterV1NodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#flavor CssClusterV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.networkInfo">networkInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | network_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#availability_zone CssClusterV1#availability_zone}. |

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#flavor CssClusterV1#flavor}.

---

##### `networkInfo`<sup>Required</sup> <a name="networkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.networkInfo"></a>

```typescript
public readonly networkInfo: CssClusterV1NodeConfigNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#network_info CssClusterV1#network_info}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.volume"></a>

```typescript
public readonly volume: CssClusterV1NodeConfigVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#volume CssClusterV1#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#availability_zone CssClusterV1#availability_zone}.

---

### CssClusterV1NodeConfigNetworkInfo <a name="CssClusterV1NodeConfigNetworkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1NodeConfigNetworkInfo: cssClusterV1.CssClusterV1NodeConfigNetworkInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#network_id CssClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#security_group_id CssClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#vpc_id CssClusterV1#vpc_id}. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#network_id CssClusterV1#network_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#security_group_id CssClusterV1#security_group_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#vpc_id CssClusterV1#vpc_id}.

---

### CssClusterV1NodeConfigVolume <a name="CssClusterV1NodeConfigVolume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1NodeConfigVolume: cssClusterV1.CssClusterV1NodeConfigVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#size CssClusterV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#volume_type CssClusterV1#volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#encryption_key CssClusterV1#encryption_key}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#size CssClusterV1#size}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#volume_type CssClusterV1#volume_type}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#encryption_key CssClusterV1#encryption_key}.

---

### CssClusterV1Nodes <a name="CssClusterV1Nodes" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1Nodes: cssClusterV1.CssClusterV1Nodes = { ... }
```


### CssClusterV1Timeouts <a name="CssClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

const cssClusterV1Timeouts: cssClusterV1.CssClusterV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#create CssClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#update CssClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#create CssClusterV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/css_cluster_v1#update CssClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssClusterV1DatastoreOutputReference <a name="CssClusterV1DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1DatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssClusterV1Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---


### CssClusterV1NodeConfigNetworkInfoOutputReference <a name="CssClusterV1NodeConfigNetworkInfoOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssClusterV1NodeConfigNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---


### CssClusterV1NodeConfigOutputReference <a name="CssClusterV1NodeConfigOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1NodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo">putNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInfo` <a name="putNetworkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo"></a>

```typescript
public putNetworkInfo(value: CssClusterV1NodeConfigNetworkInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume"></a>

```typescript
public putVolume(value: CssClusterV1NodeConfigVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfo">networkInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference">CssClusterV1NodeConfigNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference">CssClusterV1NodeConfigVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfoInput">networkInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInfo`<sup>Required</sup> <a name="networkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfo"></a>

```typescript
public readonly networkInfo: CssClusterV1NodeConfigNetworkInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference">CssClusterV1NodeConfigNetworkInfoOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volume"></a>

```typescript
public readonly volume: CssClusterV1NodeConfigVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference">CssClusterV1NodeConfigVolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `networkInfoInput`<sup>Optional</sup> <a name="networkInfoInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfoInput"></a>

```typescript
public readonly networkInfoInput: CssClusterV1NodeConfigNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: CssClusterV1NodeConfigVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssClusterV1NodeConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---


### CssClusterV1NodeConfigVolumeOutputReference <a name="CssClusterV1NodeConfigVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssClusterV1NodeConfigVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---


### CssClusterV1NodesList <a name="CssClusterV1NodesList" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1NodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get"></a>

```typescript
public get(index: number): CssClusterV1NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CssClusterV1NodesOutputReference <a name="CssClusterV1NodesOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1NodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes">CssClusterV1Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CssClusterV1Nodes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes">CssClusterV1Nodes</a>

---


### CssClusterV1TimeoutsOutputReference <a name="CssClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cssClusterV1 } from '@cdktf/provider-opentelekomcloud'

new cssClusterV1.CssClusterV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CssClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---



