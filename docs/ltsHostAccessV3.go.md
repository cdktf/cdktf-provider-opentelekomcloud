# `ltsHostAccessV3` Submodule <a name="`ltsHostAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsHostAccessV3 <a name="LtsHostAccessV3" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3 opentelekomcloud_lts_host_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.NewLtsHostAccessV3(scope Construct, id *string, config LtsHostAccessV3Config) LtsHostAccessV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config">LtsHostAccessV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config">LtsHostAccessV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect">ResetBinaryCollect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds">ResetHostGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit">ResetLogSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig"></a>

```go
func PutAccessConfig(value LtsHostAccessV3AccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---

##### `ResetBinaryCollect` <a name="ResetBinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect"></a>

```go
func ResetBinaryCollect()
```

##### `ResetHostGroupIds` <a name="ResetHostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds"></a>

```go
func ResetHostGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId"></a>

```go
func ResetId()
```

##### `ResetLogSplit` <a name="ResetLogSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit"></a>

```go
func ResetLogSplit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.LtsHostAccessV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.LtsHostAccessV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.LtsHostAccessV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.LtsHostAccessV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LtsHostAccessV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LtsHostAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LtsHostAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput">BinaryCollectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput">HostGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput">LogSplitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect">BinaryCollect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds">HostGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit">LogSplit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig"></a>

```go
func AccessConfig() LtsHostAccessV3AccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName"></a>

```go
func LogStreamName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput"></a>

```go
func AccessConfigInput() LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---

##### `BinaryCollectInput`<sup>Optional</sup> <a name="BinaryCollectInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput"></a>

```go
func BinaryCollectInput() interface{}
```

- *Type:* interface{}

---

##### `HostGroupIdsInput`<sup>Optional</sup> <a name="HostGroupIdsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput"></a>

```go
func HostGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogSplitInput`<sup>Optional</sup> <a name="LogSplitInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput"></a>

```go
func LogSplitInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput"></a>

```go
func LogStreamIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BinaryCollect`<sup>Required</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect"></a>

```go
func BinaryCollect() interface{}
```

- *Type:* interface{}

---

##### `HostGroupIds`<sup>Required</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds"></a>

```go
func HostGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogSplit`<sup>Required</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit"></a>

```go
func LogSplit() interface{}
```

- *Type:* interface{}

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsHostAccessV3AccessConfig <a name="LtsHostAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

&ltshostaccessv3.LtsHostAccessV3AccessConfig {
	Paths: *[]*string,
	BlackPaths: *[]*string,
	MultiLogFormat: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat,
	SingleLogFormat: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat,
	WindowsLogInfo: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths">Paths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths">BlackPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo">WindowsLogInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | windows_log_info block. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}.

---

##### `BlackPaths`<sup>Optional</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths"></a>

```go
BlackPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}.

---

##### `MultiLogFormat`<sup>Optional</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat"></a>

```go
MultiLogFormat LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#multi_log_format LtsHostAccessV3#multi_log_format}

---

##### `SingleLogFormat`<sup>Optional</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat"></a>

```go
SingleLogFormat LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#single_log_format LtsHostAccessV3#single_log_format}

---

##### `WindowsLogInfo`<sup>Optional</sup> <a name="WindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo"></a>

```go
WindowsLogInfo LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

windows_log_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#windows_log_info LtsHostAccessV3#windows_log_info}

---

### LtsHostAccessV3AccessConfigMultiLogFormat <a name="LtsHostAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

&ltshostaccessv3.LtsHostAccessV3AccessConfigMultiLogFormat {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigSingleLogFormat <a name="LtsHostAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

&ltshostaccessv3.LtsHostAccessV3AccessConfigSingleLogFormat {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigWindowsLogInfo <a name="LtsHostAccessV3AccessConfigWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

&ltshostaccessv3.LtsHostAccessV3AccessConfigWindowsLogInfo {
	Categories: *[]*string,
	EventLevel: *[]*string,
	TimeOffset: *f64,
	TimeOffsetUnit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories">Categories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel">EventLevel</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit">TimeOffsetUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}. |

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}.

---

##### `EventLevel`<sup>Required</sup> <a name="EventLevel" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel"></a>

```go
EventLevel *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}.

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset"></a>

```go
TimeOffset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}.

---

##### `TimeOffsetUnit`<sup>Required</sup> <a name="TimeOffsetUnit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit"></a>

```go
TimeOffsetUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}.

---

### LtsHostAccessV3Config <a name="LtsHostAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

&ltshostaccessv3.LtsHostAccessV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.ltsHostAccessV3.LtsHostAccessV3AccessConfig,
	LogGroupId: *string,
	LogStreamId: *string,
	Name: *string,
	BinaryCollect: interface{},
	HostGroupIds: *[]*string,
	Id: *string,
	LogSplit: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect">BinaryCollect</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds">HostGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit">LogSplit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig"></a>

```go
AccessConfig LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId"></a>

```go
LogStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}.

---

##### `BinaryCollect`<sup>Optional</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect"></a>

```go
BinaryCollect interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}.

---

##### `HostGroupIds`<sup>Optional</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds"></a>

```go
HostGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogSplit`<sup>Optional</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit"></a>

```go
LogSplit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsHostAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.NewLtsHostAccessV3AccessConfigMultiLogFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsHostAccessV3AccessConfigMultiLogFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---


### LtsHostAccessV3AccessConfigOutputReference <a name="LtsHostAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.NewLtsHostAccessV3AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsHostAccessV3AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat">PutMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat">PutSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo">PutWindowsLogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths">ResetBlackPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat">ResetMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat">ResetSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo">ResetWindowsLogInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLogFormat` <a name="PutMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```go
func PutMultiLogFormat(value LtsHostAccessV3AccessConfigMultiLogFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---

##### `PutSingleLogFormat` <a name="PutSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```go
func PutSingleLogFormat(value LtsHostAccessV3AccessConfigSingleLogFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---

##### `PutWindowsLogInfo` <a name="PutWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo"></a>

```go
func PutWindowsLogInfo(value LtsHostAccessV3AccessConfigWindowsLogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---

##### `ResetBlackPaths` <a name="ResetBlackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```go
func ResetBlackPaths()
```

##### `ResetMultiLogFormat` <a name="ResetMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```go
func ResetMultiLogFormat()
```

##### `ResetSingleLogFormat` <a name="ResetSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```go
func ResetSingleLogFormat()
```

##### `ResetWindowsLogInfo` <a name="ResetWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo"></a>

```go
func ResetWindowsLogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo">WindowsLogInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput">BlackPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput">MultiLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput">SingleLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput">WindowsLogInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths">BlackPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiLogFormat`<sup>Required</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```go
func MultiLogFormat() LtsHostAccessV3AccessConfigMultiLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `SingleLogFormat`<sup>Required</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```go
func SingleLogFormat() LtsHostAccessV3AccessConfigSingleLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `WindowsLogInfo`<sup>Required</sup> <a name="WindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo"></a>

```go
func WindowsLogInfo() LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a>

---

##### `BlackPathsInput`<sup>Optional</sup> <a name="BlackPathsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```go
func BlackPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MultiLogFormatInput`<sup>Optional</sup> <a name="MultiLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```go
func MultiLogFormatInput() LtsHostAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SingleLogFormatInput`<sup>Optional</sup> <a name="SingleLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```go
func SingleLogFormatInput() LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---

##### `WindowsLogInfoInput`<sup>Optional</sup> <a name="WindowsLogInfoInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput"></a>

```go
func WindowsLogInfoInput() LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---

##### `BlackPaths`<sup>Required</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```go
func BlackPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsHostAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---


### LtsHostAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.NewLtsHostAccessV3AccessConfigSingleLogFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsHostAccessV3AccessConfigSingleLogFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsHostAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---


### LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference <a name="LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltshostaccessv3"

ltshostaccessv3.NewLtsHostAccessV3AccessConfigWindowsLogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput">EventLevelInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput">TimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput">TimeOffsetUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel">EventLevel</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit">TimeOffsetUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventLevelInput`<sup>Optional</sup> <a name="EventLevelInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput"></a>

```go
func EventLevelInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeOffsetInput`<sup>Optional</sup> <a name="TimeOffsetInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput"></a>

```go
func TimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `TimeOffsetUnitInput`<sup>Optional</sup> <a name="TimeOffsetUnitInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput"></a>

```go
func TimeOffsetUnitInput() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `EventLevel`<sup>Required</sup> <a name="EventLevel" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel"></a>

```go
func EventLevel() *[]*string
```

- *Type:* *[]*string

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset"></a>

```go
func TimeOffset() *f64
```

- *Type:* *f64

---

##### `TimeOffsetUnit`<sup>Required</sup> <a name="TimeOffsetUnit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit"></a>

```go
func TimeOffsetUnit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsHostAccessV3AccessConfigWindowsLogInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---



