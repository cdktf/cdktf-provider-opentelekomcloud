# `ltsCceAccessV3` Submodule <a name="`ltsCceAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCceAccessV3 <a name="LtsCceAccessV3" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3 opentelekomcloud_lts_cce_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.NewLtsCceAccessV3(scope Construct, id *string, config LtsCceAccessV3Config) LtsCceAccessV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config">LtsCceAccessV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config">LtsCceAccessV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect">ResetBinaryCollect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds">ResetHostGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit">ResetLogSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig"></a>

```go
func PutAccessConfig(value LtsCceAccessV3AccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `ResetBinaryCollect` <a name="ResetBinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect"></a>

```go
func ResetBinaryCollect()
```

##### `ResetHostGroupIds` <a name="ResetHostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds"></a>

```go
func ResetHostGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId"></a>

```go
func ResetId()
```

##### `ResetLogSplit` <a name="ResetLogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit"></a>

```go
func ResetLogSplit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.LtsCceAccessV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.LtsCceAccessV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.LtsCceAccessV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.LtsCceAccessV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LtsCceAccessV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LtsCceAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LtsCceAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput">BinaryCollectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput">HostGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput">LogSplitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect">BinaryCollect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds">HostGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit">LogSplit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig"></a>

```go
func AccessConfig() LtsCceAccessV3AccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName"></a>

```go
func LogStreamName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput"></a>

```go
func AccessConfigInput() LtsCceAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `BinaryCollectInput`<sup>Optional</sup> <a name="BinaryCollectInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput"></a>

```go
func BinaryCollectInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `HostGroupIdsInput`<sup>Optional</sup> <a name="HostGroupIdsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput"></a>

```go
func HostGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogSplitInput`<sup>Optional</sup> <a name="LogSplitInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput"></a>

```go
func LogSplitInput() interface{}
```

- *Type:* interface{}

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput"></a>

```go
func LogStreamIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BinaryCollect`<sup>Required</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect"></a>

```go
func BinaryCollect() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `HostGroupIds`<sup>Required</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds"></a>

```go
func HostGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogSplit`<sup>Required</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit"></a>

```go
func LogSplit() interface{}
```

- *Type:* interface{}

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCceAccessV3AccessConfig <a name="LtsCceAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

&ltscceaccessv3.LtsCceAccessV3AccessConfig {
	PathType: *string,
	BlackPaths: *[]*string,
	ContainerNameRegex: *string,
	ExcludeEnvs: *map[string]*string,
	ExcludeK8SLabels: *map[string]*string,
	ExcludeLabels: *map[string]*string,
	IncludeEnvs: *map[string]*string,
	IncludeK8SLabels: *map[string]*string,
	IncludeLabels: *map[string]*string,
	LogEnvs: *map[string]*string,
	LogK8S: *map[string]*string,
	LogLabels: *map[string]*string,
	MultiLogFormat: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat,
	NameSpaceRegex: *string,
	Paths: *[]*string,
	PodNameRegex: *string,
	SingleLogFormat: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat,
	Stderr: interface{},
	Stdout: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType">PathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths">BlackPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex">ContainerNameRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs">ExcludeEnvs</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels">ExcludeK8SLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels">ExcludeLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs">IncludeEnvs</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels">IncludeK8SLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels">IncludeLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs">LogEnvs</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S">LogK8S</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels">LogLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex">NameSpaceRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths">Paths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex">PodNameRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr">Stderr</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout">Stdout</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}. |

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType"></a>

```go
PathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}.

---

##### `BlackPaths`<sup>Optional</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths"></a>

```go
BlackPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}.

---

##### `ContainerNameRegex`<sup>Optional</sup> <a name="ContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex"></a>

```go
ContainerNameRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}.

---

##### `ExcludeEnvs`<sup>Optional</sup> <a name="ExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs"></a>

```go
ExcludeEnvs *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}.

---

##### `ExcludeK8SLabels`<sup>Optional</sup> <a name="ExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels"></a>

```go
ExcludeK8SLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}.

---

##### `ExcludeLabels`<sup>Optional</sup> <a name="ExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels"></a>

```go
ExcludeLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}.

---

##### `IncludeEnvs`<sup>Optional</sup> <a name="IncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs"></a>

```go
IncludeEnvs *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}.

---

##### `IncludeK8SLabels`<sup>Optional</sup> <a name="IncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels"></a>

```go
IncludeK8SLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}.

---

##### `IncludeLabels`<sup>Optional</sup> <a name="IncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels"></a>

```go
IncludeLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}.

---

##### `LogEnvs`<sup>Optional</sup> <a name="LogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs"></a>

```go
LogEnvs *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}.

---

##### `LogK8S`<sup>Optional</sup> <a name="LogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S"></a>

```go
LogK8S *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}.

---

##### `LogLabels`<sup>Optional</sup> <a name="LogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels"></a>

```go
LogLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}.

---

##### `MultiLogFormat`<sup>Optional</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat"></a>

```go
MultiLogFormat LtsCceAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#multi_log_format LtsCceAccessV3#multi_log_format}

---

##### `NameSpaceRegex`<sup>Optional</sup> <a name="NameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex"></a>

```go
NameSpaceRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}.

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}.

---

##### `PodNameRegex`<sup>Optional</sup> <a name="PodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex"></a>

```go
PodNameRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}.

---

##### `SingleLogFormat`<sup>Optional</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat"></a>

```go
SingleLogFormat LtsCceAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#single_log_format LtsCceAccessV3#single_log_format}

---

##### `Stderr`<sup>Optional</sup> <a name="Stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr"></a>

```go
Stderr interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}.

---

##### `Stdout`<sup>Optional</sup> <a name="Stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout"></a>

```go
Stdout interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}.

---

### LtsCceAccessV3AccessConfigMultiLogFormat <a name="LtsCceAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

&ltscceaccessv3.LtsCceAccessV3AccessConfigMultiLogFormat {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3AccessConfigSingleLogFormat <a name="LtsCceAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

&ltscceaccessv3.LtsCceAccessV3AccessConfigSingleLogFormat {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3Config <a name="LtsCceAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

&ltscceaccessv3.LtsCceAccessV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig,
	ClusterId: *string,
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
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect">BinaryCollect</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds">HostGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit">LogSplit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig"></a>

```go
AccessConfig LtsCceAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#access_config LtsCceAccessV3#access_config}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}.

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId"></a>

```go
LogStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}.

---

##### `BinaryCollect`<sup>Optional</sup> <a name="BinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect"></a>

```go
BinaryCollect interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}.

---

##### `HostGroupIds`<sup>Optional</sup> <a name="HostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds"></a>

```go
HostGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogSplit`<sup>Optional</sup> <a name="LogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit"></a>

```go
LogSplit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsCceAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.NewLtsCceAccessV3AccessConfigMultiLogFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsCceAccessV3AccessConfigMultiLogFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsCceAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---


### LtsCceAccessV3AccessConfigOutputReference <a name="LtsCceAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.NewLtsCceAccessV3AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsCceAccessV3AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat">PutMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat">PutSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths">ResetBlackPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex">ResetContainerNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs">ResetExcludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels">ResetExcludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels">ResetExcludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs">ResetIncludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels">ResetIncludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels">ResetIncludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs">ResetLogEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S">ResetLogK8S</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels">ResetLogLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat">ResetMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex">ResetNameSpaceRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex">ResetPodNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat">ResetSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr">ResetStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout">ResetStdout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLogFormat` <a name="PutMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```go
func PutMultiLogFormat(value LtsCceAccessV3AccessConfigMultiLogFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `PutSingleLogFormat` <a name="PutSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```go
func PutSingleLogFormat(value LtsCceAccessV3AccessConfigSingleLogFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `ResetBlackPaths` <a name="ResetBlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```go
func ResetBlackPaths()
```

##### `ResetContainerNameRegex` <a name="ResetContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex"></a>

```go
func ResetContainerNameRegex()
```

##### `ResetExcludeEnvs` <a name="ResetExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs"></a>

```go
func ResetExcludeEnvs()
```

##### `ResetExcludeK8SLabels` <a name="ResetExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels"></a>

```go
func ResetExcludeK8SLabels()
```

##### `ResetExcludeLabels` <a name="ResetExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels"></a>

```go
func ResetExcludeLabels()
```

##### `ResetIncludeEnvs` <a name="ResetIncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs"></a>

```go
func ResetIncludeEnvs()
```

##### `ResetIncludeK8SLabels` <a name="ResetIncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels"></a>

```go
func ResetIncludeK8SLabels()
```

##### `ResetIncludeLabels` <a name="ResetIncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels"></a>

```go
func ResetIncludeLabels()
```

##### `ResetLogEnvs` <a name="ResetLogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs"></a>

```go
func ResetLogEnvs()
```

##### `ResetLogK8S` <a name="ResetLogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S"></a>

```go
func ResetLogK8S()
```

##### `ResetLogLabels` <a name="ResetLogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels"></a>

```go
func ResetLogLabels()
```

##### `ResetMultiLogFormat` <a name="ResetMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```go
func ResetMultiLogFormat()
```

##### `ResetNameSpaceRegex` <a name="ResetNameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex"></a>

```go
func ResetNameSpaceRegex()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths"></a>

```go
func ResetPaths()
```

##### `ResetPodNameRegex` <a name="ResetPodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex"></a>

```go
func ResetPodNameRegex()
```

##### `ResetSingleLogFormat` <a name="ResetSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```go
func ResetSingleLogFormat()
```

##### `ResetStderr` <a name="ResetStderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr"></a>

```go
func ResetStderr()
```

##### `ResetStdout` <a name="ResetStdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout"></a>

```go
func ResetStdout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat">MultiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat">SingleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput">BlackPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput">ContainerNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput">ExcludeEnvsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput">ExcludeK8SLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput">ExcludeLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput">IncludeEnvsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput">IncludeK8SLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput">IncludeLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput">LogEnvsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput">LogK8SInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput">LogLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput">MultiLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput">NameSpaceRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput">PodNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput">SingleLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput">StderrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput">StdoutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths">BlackPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex">ContainerNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs">ExcludeEnvs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels">ExcludeK8SLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels">ExcludeLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs">IncludeEnvs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels">IncludeK8SLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels">IncludeLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs">LogEnvs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S">LogK8S</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels">LogLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex">NameSpaceRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex">PodNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr">Stderr</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout">Stdout</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiLogFormat`<sup>Required</sup> <a name="MultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```go
func MultiLogFormat() LtsCceAccessV3AccessConfigMultiLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `SingleLogFormat`<sup>Required</sup> <a name="SingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```go
func SingleLogFormat() LtsCceAccessV3AccessConfigSingleLogFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `BlackPathsInput`<sup>Optional</sup> <a name="BlackPathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```go
func BlackPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerNameRegexInput`<sup>Optional</sup> <a name="ContainerNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput"></a>

```go
func ContainerNameRegexInput() *string
```

- *Type:* *string

---

##### `ExcludeEnvsInput`<sup>Optional</sup> <a name="ExcludeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput"></a>

```go
func ExcludeEnvsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExcludeK8SLabelsInput`<sup>Optional</sup> <a name="ExcludeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput"></a>

```go
func ExcludeK8SLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExcludeLabelsInput`<sup>Optional</sup> <a name="ExcludeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput"></a>

```go
func ExcludeLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeEnvsInput`<sup>Optional</sup> <a name="IncludeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput"></a>

```go
func IncludeEnvsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeK8SLabelsInput`<sup>Optional</sup> <a name="IncludeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput"></a>

```go
func IncludeK8SLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeLabelsInput`<sup>Optional</sup> <a name="IncludeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput"></a>

```go
func IncludeLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogEnvsInput`<sup>Optional</sup> <a name="LogEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput"></a>

```go
func LogEnvsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogK8SInput`<sup>Optional</sup> <a name="LogK8SInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput"></a>

```go
func LogK8SInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogLabelsInput`<sup>Optional</sup> <a name="LogLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput"></a>

```go
func LogLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MultiLogFormatInput`<sup>Optional</sup> <a name="MultiLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```go
func MultiLogFormatInput() LtsCceAccessV3AccessConfigMultiLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `NameSpaceRegexInput`<sup>Optional</sup> <a name="NameSpaceRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput"></a>

```go
func NameSpaceRegexInput() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput"></a>

```go
func PathTypeInput() *string
```

- *Type:* *string

---

##### `PodNameRegexInput`<sup>Optional</sup> <a name="PodNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput"></a>

```go
func PodNameRegexInput() *string
```

- *Type:* *string

---

##### `SingleLogFormatInput`<sup>Optional</sup> <a name="SingleLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```go
func SingleLogFormatInput() LtsCceAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `StderrInput`<sup>Optional</sup> <a name="StderrInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput"></a>

```go
func StderrInput() interface{}
```

- *Type:* interface{}

---

##### `StdoutInput`<sup>Optional</sup> <a name="StdoutInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput"></a>

```go
func StdoutInput() interface{}
```

- *Type:* interface{}

---

##### `BlackPaths`<sup>Required</sup> <a name="BlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```go
func BlackPaths() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerNameRegex`<sup>Required</sup> <a name="ContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex"></a>

```go
func ContainerNameRegex() *string
```

- *Type:* *string

---

##### `ExcludeEnvs`<sup>Required</sup> <a name="ExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs"></a>

```go
func ExcludeEnvs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExcludeK8SLabels`<sup>Required</sup> <a name="ExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels"></a>

```go
func ExcludeK8SLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExcludeLabels`<sup>Required</sup> <a name="ExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels"></a>

```go
func ExcludeLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeEnvs`<sup>Required</sup> <a name="IncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs"></a>

```go
func IncludeEnvs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeK8SLabels`<sup>Required</sup> <a name="IncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels"></a>

```go
func IncludeK8SLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IncludeLabels`<sup>Required</sup> <a name="IncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels"></a>

```go
func IncludeLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogEnvs`<sup>Required</sup> <a name="LogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs"></a>

```go
func LogEnvs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogK8S`<sup>Required</sup> <a name="LogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S"></a>

```go
func LogK8S() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogLabels`<sup>Required</sup> <a name="LogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels"></a>

```go
func LogLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameSpaceRegex`<sup>Required</sup> <a name="NameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex"></a>

```go
func NameSpaceRegex() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `PodNameRegex`<sup>Required</sup> <a name="PodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex"></a>

```go
func PodNameRegex() *string
```

- *Type:* *string

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr"></a>

```go
func Stderr() interface{}
```

- *Type:* interface{}

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout"></a>

```go
func Stdout() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsCceAccessV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---


### LtsCceAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ltscceaccessv3"

ltscceaccessv3.NewLtsCceAccessV3AccessConfigSingleLogFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LtsCceAccessV3AccessConfigSingleLogFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() LtsCceAccessV3AccessConfigSingleLogFormat
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---



