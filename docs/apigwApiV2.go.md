# `apigwApiV2` Submodule <a name="`apigwApiV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwApiV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwApiV2 <a name="ApigwApiV2" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2 opentelekomcloud_apigw_api_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2(scope Construct, id *string, config ApigwApiV2Config) ApigwApiV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config">ApigwApiV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config">ApigwApiV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams">PutBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph">PutFuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy">PutFuncGraphPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy">PutHttpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock">PutMock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy">PutMockPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams">PutRequestParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams">ResetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription">ResetBodyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse">ResetFailureResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph">ResetFuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy">ResetFuncGraphPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy">ResetHttpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode">ResetMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock">ResetMock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy">ResetMockPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams">ResetRequestParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId">ResetResponseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled">ResetSecurityAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType">ResetSecurityAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse">ResetSuccessResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackendParams` <a name="PutBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams"></a>

```go
func PutBackendParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFuncGraph` <a name="PutFuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph"></a>

```go
func PutFuncGraph(value ApigwApiV2FuncGraph)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---

##### `PutFuncGraphPolicy` <a name="PutFuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy"></a>

```go
func PutFuncGraphPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp"></a>

```go
func PutHttp(value ApigwApiV2Http)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---

##### `PutHttpPolicy` <a name="PutHttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy"></a>

```go
func PutHttpPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMock` <a name="PutMock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock"></a>

```go
func PutMock(value ApigwApiV2Mock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---

##### `PutMockPolicy` <a name="PutMockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy"></a>

```go
func PutMockPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestParams` <a name="PutRequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams"></a>

```go
func PutRequestParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetBackendParams` <a name="ResetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams"></a>

```go
func ResetBackendParams()
```

##### `ResetBodyDescription` <a name="ResetBodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription"></a>

```go
func ResetBodyDescription()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors"></a>

```go
func ResetCors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailureResponse` <a name="ResetFailureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse"></a>

```go
func ResetFailureResponse()
```

##### `ResetFuncGraph` <a name="ResetFuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph"></a>

```go
func ResetFuncGraph()
```

##### `ResetFuncGraphPolicy` <a name="ResetFuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy"></a>

```go
func ResetFuncGraphPolicy()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp"></a>

```go
func ResetHttp()
```

##### `ResetHttpPolicy` <a name="ResetHttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy"></a>

```go
func ResetHttpPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId"></a>

```go
func ResetId()
```

##### `ResetMatchMode` <a name="ResetMatchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode"></a>

```go
func ResetMatchMode()
```

##### `ResetMock` <a name="ResetMock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock"></a>

```go
func ResetMock()
```

##### `ResetMockPolicy` <a name="ResetMockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy"></a>

```go
func ResetMockPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequestParams` <a name="ResetRequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams"></a>

```go
func ResetRequestParams()
```

##### `ResetResponseId` <a name="ResetResponseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId"></a>

```go
func ResetResponseId()
```

##### `ResetSecurityAuthenticationEnabled` <a name="ResetSecurityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled"></a>

```go
func ResetSecurityAuthenticationEnabled()
```

##### `ResetSecurityAuthenticationType` <a name="ResetSecurityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType"></a>

```go
func ResetSecurityAuthenticationType()
```

##### `ResetSuccessResponse` <a name="ResetSuccessResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse"></a>

```go
func ResetSuccessResponse()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.ApigwApiV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.ApigwApiV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.ApigwApiV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.ApigwApiV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigwApiV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigwApiV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigwApiV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams">BackendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph">FuncGraph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy">FuncGraphPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http">Http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy">HttpPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock">Mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy">MockPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt">RegisteredAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams">RequestParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput">BackendParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput">BodyDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput">CorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput">FailureResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput">FuncGraphInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput">FuncGraphPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput">HttpPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput">MatchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput">MockInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput">MockPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput">RequestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput">RequestParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput">RequestProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput">RequestUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput">ResponseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput">SecurityAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput">SecurityAuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput">SuccessResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription">BodyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors">Cors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse">FailureResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode">MatchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri">RequestUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId">ResponseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled">SecurityAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType">SecurityAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse">SuccessResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendParams`<sup>Required</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams"></a>

```go
func BackendParams() ApigwApiV2BackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a>

---

##### `FuncGraph`<sup>Required</sup> <a name="FuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph"></a>

```go
func FuncGraph() ApigwApiV2FuncGraphOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a>

---

##### `FuncGraphPolicy`<sup>Required</sup> <a name="FuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy"></a>

```go
func FuncGraphPolicy() ApigwApiV2FuncGraphPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http"></a>

```go
func Http() ApigwApiV2HttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a>

---

##### `HttpPolicy`<sup>Required</sup> <a name="HttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy"></a>

```go
func HttpPolicy() ApigwApiV2HttpPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a>

---

##### `Mock`<sup>Required</sup> <a name="Mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock"></a>

```go
func Mock() ApigwApiV2MockOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a>

---

##### `MockPolicy`<sup>Required</sup> <a name="MockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy"></a>

```go
func MockPolicy() ApigwApiV2MockPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a>

---

##### `RegisteredAt`<sup>Required</sup> <a name="RegisteredAt" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt"></a>

```go
func RegisteredAt() *string
```

- *Type:* *string

---

##### `RequestParams`<sup>Required</sup> <a name="RequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams"></a>

```go
func RequestParams() ApigwApiV2RequestParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `BackendParamsInput`<sup>Optional</sup> <a name="BackendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput"></a>

```go
func BackendParamsInput() interface{}
```

- *Type:* interface{}

---

##### `BodyDescriptionInput`<sup>Optional</sup> <a name="BodyDescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput"></a>

```go
func BodyDescriptionInput() *string
```

- *Type:* *string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput"></a>

```go
func CorsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailureResponseInput`<sup>Optional</sup> <a name="FailureResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput"></a>

```go
func FailureResponseInput() *string
```

- *Type:* *string

---

##### `FuncGraphInput`<sup>Optional</sup> <a name="FuncGraphInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput"></a>

```go
func FuncGraphInput() ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---

##### `FuncGraphPolicyInput`<sup>Optional</sup> <a name="FuncGraphPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput"></a>

```go
func FuncGraphPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput"></a>

```go
func HttpInput() ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---

##### `HttpPolicyInput`<sup>Optional</sup> <a name="HttpPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput"></a>

```go
func HttpPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchModeInput`<sup>Optional</sup> <a name="MatchModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput"></a>

```go
func MatchModeInput() *string
```

- *Type:* *string

---

##### `MockInput`<sup>Optional</sup> <a name="MockInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput"></a>

```go
func MockInput() ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---

##### `MockPolicyInput`<sup>Optional</sup> <a name="MockPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput"></a>

```go
func MockPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput"></a>

```go
func RequestMethodInput() *string
```

- *Type:* *string

---

##### `RequestParamsInput`<sup>Optional</sup> <a name="RequestParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput"></a>

```go
func RequestParamsInput() interface{}
```

- *Type:* interface{}

---

##### `RequestProtocolInput`<sup>Optional</sup> <a name="RequestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput"></a>

```go
func RequestProtocolInput() *string
```

- *Type:* *string

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput"></a>

```go
func RequestUriInput() *string
```

- *Type:* *string

---

##### `ResponseIdInput`<sup>Optional</sup> <a name="ResponseIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput"></a>

```go
func ResponseIdInput() *string
```

- *Type:* *string

---

##### `SecurityAuthenticationEnabledInput`<sup>Optional</sup> <a name="SecurityAuthenticationEnabledInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput"></a>

```go
func SecurityAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityAuthenticationTypeInput`<sup>Optional</sup> <a name="SecurityAuthenticationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput"></a>

```go
func SecurityAuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `SuccessResponseInput`<sup>Optional</sup> <a name="SuccessResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput"></a>

```go
func SuccessResponseInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `BodyDescription`<sup>Required</sup> <a name="BodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription"></a>

```go
func BodyDescription() *string
```

- *Type:* *string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors"></a>

```go
func Cors() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FailureResponse`<sup>Required</sup> <a name="FailureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse"></a>

```go
func FailureResponse() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchMode`<sup>Required</sup> <a name="MatchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode"></a>

```go
func MatchMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod"></a>

```go
func RequestMethod() *string
```

- *Type:* *string

---

##### `RequestProtocol`<sup>Required</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol"></a>

```go
func RequestProtocol() *string
```

- *Type:* *string

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri"></a>

```go
func RequestUri() *string
```

- *Type:* *string

---

##### `ResponseId`<sup>Required</sup> <a name="ResponseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId"></a>

```go
func ResponseId() *string
```

- *Type:* *string

---

##### `SecurityAuthenticationEnabled`<sup>Required</sup> <a name="SecurityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled"></a>

```go
func SecurityAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityAuthenticationType`<sup>Required</sup> <a name="SecurityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType"></a>

```go
func SecurityAuthenticationType() *string
```

- *Type:* *string

---

##### `SuccessResponse`<sup>Required</sup> <a name="SuccessResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse"></a>

```go
func SuccessResponse() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwApiV2BackendParams <a name="ApigwApiV2BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2BackendParams {
	Location: *string,
	Name: *string,
	Type: *string,
	Value: *string,
	Description: *string,
	SystemParamType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `SystemParamType`<sup>Optional</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType"></a>

```go
SystemParamType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2Config <a name="ApigwApiV2Config" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	GroupId: *string,
	Name: *string,
	RequestMethod: *string,
	RequestProtocol: *string,
	RequestUri: *string,
	Type: *string,
	AuthorizerId: *string,
	BackendParams: interface{},
	BodyDescription: *string,
	Cors: interface{},
	Description: *string,
	FailureResponse: *string,
	FuncGraph: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwApiV2.ApigwApiV2FuncGraph,
	FuncGraphPolicy: interface{},
	Http: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwApiV2.ApigwApiV2Http,
	HttpPolicy: interface{},
	Id: *string,
	MatchMode: *string,
	Mock: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwApiV2.ApigwApiV2Mock,
	MockPolicy: interface{},
	Region: *string,
	RequestParams: interface{},
	ResponseId: *string,
	SecurityAuthenticationEnabled: interface{},
	SecurityAuthenticationType: *string,
	SuccessResponse: *string,
	Tags: *[]*string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri">RequestUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams">BackendParams</a></code> | <code>interface{}</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription">BodyDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors">Cors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse">FailureResponse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph">FuncGraph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | func_graph block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy">FuncGraphPolicy</a></code> | <code>interface{}</code> | func_graph_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http">Http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | http block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy">HttpPolicy</a></code> | <code>interface{}</code> | http_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#id ApigwApiV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode">MatchMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock">Mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | mock block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy">MockPolicy</a></code> | <code>interface{}</code> | mock_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#region ApigwApiV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams">RequestParams</a></code> | <code>interface{}</code> | request_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId">ResponseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled">SecurityAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType">SecurityAuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse">SuccessResponse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}.

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod"></a>

```go
RequestMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `RequestProtocol`<sup>Required</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol"></a>

```go
RequestProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri"></a>

```go
RequestUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `BackendParams`<sup>Optional</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams"></a>

```go
BackendParams interface{}
```

- *Type:* interface{}

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `BodyDescription`<sup>Optional</sup> <a name="BodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription"></a>

```go
BodyDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors"></a>

```go
Cors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `FailureResponse`<sup>Optional</sup> <a name="FailureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse"></a>

```go
FailureResponse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}.

---

##### `FuncGraph`<sup>Optional</sup> <a name="FuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph"></a>

```go
FuncGraph ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

func_graph block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#func_graph ApigwApiV2#func_graph}

---

##### `FuncGraphPolicy`<sup>Optional</sup> <a name="FuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy"></a>

```go
FuncGraphPolicy interface{}
```

- *Type:* interface{}

func_graph_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#func_graph_policy ApigwApiV2#func_graph_policy}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http"></a>

```go
Http ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#http ApigwApiV2#http}

---

##### `HttpPolicy`<sup>Optional</sup> <a name="HttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy"></a>

```go
HttpPolicy interface{}
```

- *Type:* interface{}

http_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#http_policy ApigwApiV2#http_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#id ApigwApiV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MatchMode`<sup>Optional</sup> <a name="MatchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode"></a>

```go
MatchMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}.

---

##### `Mock`<sup>Optional</sup> <a name="Mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock"></a>

```go
Mock ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

mock block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#mock ApigwApiV2#mock}

---

##### `MockPolicy`<sup>Optional</sup> <a name="MockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy"></a>

```go
MockPolicy interface{}
```

- *Type:* interface{}

mock_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#mock_policy ApigwApiV2#mock_policy}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#region ApigwApiV2#region}.

---

##### `RequestParams`<sup>Optional</sup> <a name="RequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams"></a>

```go
RequestParams interface{}
```

- *Type:* interface{}

request_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_params ApigwApiV2#request_params}

---

##### `ResponseId`<sup>Optional</sup> <a name="ResponseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId"></a>

```go
ResponseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}.

---

##### `SecurityAuthenticationEnabled`<sup>Optional</sup> <a name="SecurityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled"></a>

```go
SecurityAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}.

---

##### `SecurityAuthenticationType`<sup>Optional</sup> <a name="SecurityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType"></a>

```go
SecurityAuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}.

---

##### `SuccessResponse`<sup>Optional</sup> <a name="SuccessResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse"></a>

```go
SuccessResponse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraph <a name="ApigwApiV2FuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2FuncGraph {
	FunctionUrn: *string,
	AuthorizerId: *string,
	Description: *string,
	InvocationType: *string,
	NetworkType: *string,
	Timeout: *f64,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType">InvocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn"></a>

```go
FunctionUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType"></a>

```go
InvocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicy <a name="ApigwApiV2FuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2FuncGraphPolicy {
	Conditions: interface{},
	FunctionUrn: *string,
	Name: *string,
	AuthorizerId: *string,
	BackendParams: interface{},
	EffectiveMode: *string,
	InvocationType: *string,
	NetworkType: *string,
	Timeout: *f64,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams">BackendParams</a></code> | <code>interface{}</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType">InvocationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn"></a>

```go
FunctionUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `BackendParams`<sup>Optional</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams"></a>

```go
BackendParams interface{}
```

- *Type:* interface{}

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `EffectiveMode`<sup>Optional</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode"></a>

```go
EffectiveMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType"></a>

```go
InvocationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicyBackendParams <a name="ApigwApiV2FuncGraphPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2FuncGraphPolicyBackendParams {
	Location: *string,
	Name: *string,
	Type: *string,
	Value: *string,
	Description: *string,
	SystemParamType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `SystemParamType`<sup>Optional</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType"></a>

```go
SystemParamType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2FuncGraphPolicyConditions <a name="ApigwApiV2FuncGraphPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2FuncGraphPolicyConditions {
	Value: *string,
	Origin: *string,
	ParamName: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName">ParamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `ParamName`<sup>Optional</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName"></a>

```go
ParamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Http <a name="ApigwApiV2Http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2Http {
	RequestMethod: *string,
	RequestUri: *string,
	AuthorizerId: *string,
	Description: *string,
	RequestProtocol: *string,
	RetryCount: *f64,
	SslEnable: interface{},
	Timeout: *f64,
	UrlDomain: *string,
	Version: *string,
	VpcChannelId: *string,
	VpcChannelProxyHost: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri">RequestUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount">RetryCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable">SslEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain">UrlDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId">VpcChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost">VpcChannelProxyHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod"></a>

```go
RequestMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri"></a>

```go
RequestUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `RequestProtocol`<sup>Optional</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol"></a>

```go
RequestProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `RetryCount`<sup>Optional</sup> <a name="RetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount"></a>

```go
RetryCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `SslEnable`<sup>Optional</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable"></a>

```go
SslEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `UrlDomain`<sup>Optional</sup> <a name="UrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain"></a>

```go
UrlDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

##### `VpcChannelId`<sup>Optional</sup> <a name="VpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId"></a>

```go
VpcChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `VpcChannelProxyHost`<sup>Optional</sup> <a name="VpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost"></a>

```go
VpcChannelProxyHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicy <a name="ApigwApiV2HttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2HttpPolicy {
	Conditions: interface{},
	Name: *string,
	RequestMethod: *string,
	RequestUri: *string,
	AuthorizerId: *string,
	BackendParams: interface{},
	EffectiveMode: *string,
	RequestProtocol: *string,
	RetryCount: *f64,
	Timeout: *f64,
	UrlDomain: *string,
	VpcChannelId: *string,
	VpcChannelProxyHost: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri">RequestUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams">BackendParams</a></code> | <code>interface{}</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount">RetryCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain">UrlDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId">VpcChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost">VpcChannelProxyHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod"></a>

```go
RequestMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri"></a>

```go
RequestUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `BackendParams`<sup>Optional</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams"></a>

```go
BackendParams interface{}
```

- *Type:* interface{}

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `EffectiveMode`<sup>Optional</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode"></a>

```go
EffectiveMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `RequestProtocol`<sup>Optional</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol"></a>

```go
RequestProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `RetryCount`<sup>Optional</sup> <a name="RetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount"></a>

```go
RetryCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `UrlDomain`<sup>Optional</sup> <a name="UrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain"></a>

```go
UrlDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `VpcChannelId`<sup>Optional</sup> <a name="VpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId"></a>

```go
VpcChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `VpcChannelProxyHost`<sup>Optional</sup> <a name="VpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost"></a>

```go
VpcChannelProxyHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicyBackendParams <a name="ApigwApiV2HttpPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2HttpPolicyBackendParams {
	Location: *string,
	Name: *string,
	Type: *string,
	Value: *string,
	Description: *string,
	SystemParamType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `SystemParamType`<sup>Optional</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType"></a>

```go
SystemParamType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2HttpPolicyConditions <a name="ApigwApiV2HttpPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2HttpPolicyConditions {
	Value: *string,
	Origin: *string,
	ParamName: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName">ParamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `ParamName`<sup>Optional</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName"></a>

```go
ParamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Mock <a name="ApigwApiV2Mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2Mock {
	AuthorizerId: *string,
	Description: *string,
	Response: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response">Response</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response"></a>

```go
Response *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2MockPolicy <a name="ApigwApiV2MockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2MockPolicy {
	Conditions: interface{},
	Name: *string,
	AuthorizerId: *string,
	BackendParams: interface{},
	EffectiveMode: *string,
	Response: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams">BackendParams</a></code> | <code>interface{}</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response">Response</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `BackendParams`<sup>Optional</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams"></a>

```go
BackendParams interface{}
```

- *Type:* interface{}

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `EffectiveMode`<sup>Optional</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode"></a>

```go
EffectiveMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response"></a>

```go
Response *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

### ApigwApiV2MockPolicyBackendParams <a name="ApigwApiV2MockPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2MockPolicyBackendParams {
	Location: *string,
	Name: *string,
	Type: *string,
	Value: *string,
	Description: *string,
	SystemParamType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `SystemParamType`<sup>Optional</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType"></a>

```go
SystemParamType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2MockPolicyConditions <a name="ApigwApiV2MockPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2MockPolicyConditions {
	Value: *string,
	Origin: *string,
	ParamName: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName">ParamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `ParamName`<sup>Optional</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName"></a>

```go
ParamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2RequestParams <a name="ApigwApiV2RequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

&apigwapiv2.ApigwApiV2RequestParams {
	Name: *string,
	Default: *string,
	Description: *string,
	Enumeration: *string,
	Location: *string,
	Maximum: *f64,
	Minimum: *f64,
	Passthrough: interface{},
	Required: interface{},
	Sample: *string,
	Type: *string,
	ValidityCheck: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#default ApigwApiV2#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration">Enumeration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum">Maximum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum">Minimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough">Passthrough</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#required ApigwApiV2#required}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample">Sample</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck">ValidityCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#default ApigwApiV2#default}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `Enumeration`<sup>Optional</sup> <a name="Enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration"></a>

```go
Enumeration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}.

---

##### `Passthrough`<sup>Optional</sup> <a name="Passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough"></a>

```go
Passthrough interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#required ApigwApiV2#required}.

---

##### `Sample`<sup>Optional</sup> <a name="Sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample"></a>

```go
Sample *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `ValidityCheck`<sup>Optional</sup> <a name="ValidityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck"></a>

```go
ValidityCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwApiV2BackendParamsList <a name="ApigwApiV2BackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2BackendParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2BackendParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get"></a>

```go
func Get(index *f64) ApigwApiV2BackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2BackendParamsOutputReference <a name="ApigwApiV2BackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2BackendParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2BackendParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType">ResetSystemParamType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSystemParamType` <a name="ResetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType"></a>

```go
func ResetSystemParamType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput">SystemParamTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SystemParamTypeInput`<sup>Optional</sup> <a name="SystemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput"></a>

```go
func SystemParamTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SystemParamType`<sup>Required</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType"></a>

```go
func SystemParamType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphOutputReference <a name="ApigwApiV2FuncGraphOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwApiV2FuncGraphOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType"></a>

```go
func ResetInvocationType()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput">FunctionUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput"></a>

```go
func FunctionUrnInput() *string
```

- *Type:* *string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput"></a>

```go
func InvocationTypeInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn"></a>

```go
func FunctionUrn() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---


### ApigwApiV2FuncGraphPolicyBackendParamsList <a name="ApigwApiV2FuncGraphPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyBackendParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2FuncGraphPolicyBackendParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get"></a>

```go
func Get(index *f64) ApigwApiV2FuncGraphPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphPolicyBackendParamsOutputReference <a name="ApigwApiV2FuncGraphPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyBackendParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2FuncGraphPolicyBackendParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType">ResetSystemParamType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSystemParamType` <a name="ResetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```go
func ResetSystemParamType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput">SystemParamTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SystemParamTypeInput`<sup>Optional</sup> <a name="SystemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```go
func SystemParamTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SystemParamType`<sup>Required</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType"></a>

```go
func SystemParamType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphPolicyConditionsList <a name="ApigwApiV2FuncGraphPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2FuncGraphPolicyConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get"></a>

```go
func Get(index *f64) ApigwApiV2FuncGraphPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphPolicyConditionsOutputReference <a name="ApigwApiV2FuncGraphPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2FuncGraphPolicyConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName">ResetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetParamName` <a name="ResetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName"></a>

```go
func ResetParamName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput">ParamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `ParamNameInput`<sup>Optional</sup> <a name="ParamNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput"></a>

```go
func ParamNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphPolicyList <a name="ApigwApiV2FuncGraphPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2FuncGraphPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get"></a>

```go
func Get(index *f64) ApigwApiV2FuncGraphPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2FuncGraphPolicyOutputReference <a name="ApigwApiV2FuncGraphPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2FuncGraphPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2FuncGraphPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams">PutBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams">ResetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode">ResetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendParams` <a name="PutBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams"></a>

```go
func PutBackendParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetBackendParams` <a name="ResetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams"></a>

```go
func ResetBackendParams()
```

##### `ResetEffectiveMode` <a name="ResetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode"></a>

```go
func ResetEffectiveMode()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType"></a>

```go
func ResetInvocationType()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams">BackendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput">BackendParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput">EffectiveModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput">FunctionUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendParams`<sup>Required</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams"></a>

```go
func BackendParams() ApigwApiV2FuncGraphPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions"></a>

```go
func Conditions() ApigwApiV2FuncGraphPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a>

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `BackendParamsInput`<sup>Optional</sup> <a name="BackendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput"></a>

```go
func BackendParamsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `EffectiveModeInput`<sup>Optional</sup> <a name="EffectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput"></a>

```go
func EffectiveModeInput() *string
```

- *Type:* *string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput"></a>

```go
func FunctionUrnInput() *string
```

- *Type:* *string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput"></a>

```go
func InvocationTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `EffectiveMode`<sup>Required</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode"></a>

```go
func EffectiveMode() *string
```

- *Type:* *string

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn"></a>

```go
func FunctionUrn() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpOutputReference <a name="ApigwApiV2HttpOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwApiV2HttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol">ResetRequestProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount">ResetRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable">ResetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain">ResetUrlDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId">ResetVpcChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost">ResetVpcChannelProxyHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRequestProtocol` <a name="ResetRequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol"></a>

```go
func ResetRequestProtocol()
```

##### `ResetRetryCount` <a name="ResetRetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount"></a>

```go
func ResetRetryCount()
```

##### `ResetSslEnable` <a name="ResetSslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable"></a>

```go
func ResetSslEnable()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUrlDomain` <a name="ResetUrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain"></a>

```go
func ResetUrlDomain()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVpcChannelId` <a name="ResetVpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId"></a>

```go
func ResetVpcChannelId()
```

##### `ResetVpcChannelProxyHost` <a name="ResetVpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost"></a>

```go
func ResetVpcChannelProxyHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput">RequestProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput">RetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput">SslEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput">UrlDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput">VpcChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput">VpcChannelProxyHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri">RequestUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount">RetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable">SslEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain">UrlDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId">VpcChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost">VpcChannelProxyHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput"></a>

```go
func RequestMethodInput() *string
```

- *Type:* *string

---

##### `RequestProtocolInput`<sup>Optional</sup> <a name="RequestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput"></a>

```go
func RequestProtocolInput() *string
```

- *Type:* *string

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() *string
```

- *Type:* *string

---

##### `RetryCountInput`<sup>Optional</sup> <a name="RetryCountInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput"></a>

```go
func RetryCountInput() *f64
```

- *Type:* *f64

---

##### `SslEnableInput`<sup>Optional</sup> <a name="SslEnableInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput"></a>

```go
func SslEnableInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UrlDomainInput`<sup>Optional</sup> <a name="UrlDomainInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput"></a>

```go
func UrlDomainInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VpcChannelIdInput`<sup>Optional</sup> <a name="VpcChannelIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput"></a>

```go
func VpcChannelIdInput() *string
```

- *Type:* *string

---

##### `VpcChannelProxyHostInput`<sup>Optional</sup> <a name="VpcChannelProxyHostInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput"></a>

```go
func VpcChannelProxyHostInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod"></a>

```go
func RequestMethod() *string
```

- *Type:* *string

---

##### `RequestProtocol`<sup>Required</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol"></a>

```go
func RequestProtocol() *string
```

- *Type:* *string

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri"></a>

```go
func RequestUri() *string
```

- *Type:* *string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount"></a>

```go
func RetryCount() *f64
```

- *Type:* *f64

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable"></a>

```go
func SslEnable() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `UrlDomain`<sup>Required</sup> <a name="UrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain"></a>

```go
func UrlDomain() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VpcChannelId`<sup>Required</sup> <a name="VpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId"></a>

```go
func VpcChannelId() *string
```

- *Type:* *string

---

##### `VpcChannelProxyHost`<sup>Required</sup> <a name="VpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost"></a>

```go
func VpcChannelProxyHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---


### ApigwApiV2HttpPolicyBackendParamsList <a name="ApigwApiV2HttpPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyBackendParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2HttpPolicyBackendParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get"></a>

```go
func Get(index *f64) ApigwApiV2HttpPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpPolicyBackendParamsOutputReference <a name="ApigwApiV2HttpPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyBackendParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2HttpPolicyBackendParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType">ResetSystemParamType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSystemParamType` <a name="ResetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```go
func ResetSystemParamType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput">SystemParamTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SystemParamTypeInput`<sup>Optional</sup> <a name="SystemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```go
func SystemParamTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SystemParamType`<sup>Required</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType"></a>

```go
func SystemParamType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpPolicyConditionsList <a name="ApigwApiV2HttpPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2HttpPolicyConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get"></a>

```go
func Get(index *f64) ApigwApiV2HttpPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpPolicyConditionsOutputReference <a name="ApigwApiV2HttpPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2HttpPolicyConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName">ResetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetParamName` <a name="ResetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName"></a>

```go
func ResetParamName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput">ParamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `ParamNameInput`<sup>Optional</sup> <a name="ParamNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput"></a>

```go
func ParamNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpPolicyList <a name="ApigwApiV2HttpPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2HttpPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get"></a>

```go
func Get(index *f64) ApigwApiV2HttpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2HttpPolicyOutputReference <a name="ApigwApiV2HttpPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2HttpPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2HttpPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams">PutBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams">ResetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode">ResetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol">ResetRequestProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount">ResetRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain">ResetUrlDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId">ResetVpcChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost">ResetVpcChannelProxyHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendParams` <a name="PutBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams"></a>

```go
func PutBackendParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetBackendParams` <a name="ResetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams"></a>

```go
func ResetBackendParams()
```

##### `ResetEffectiveMode` <a name="ResetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode"></a>

```go
func ResetEffectiveMode()
```

##### `ResetRequestProtocol` <a name="ResetRequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol"></a>

```go
func ResetRequestProtocol()
```

##### `ResetRetryCount` <a name="ResetRetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount"></a>

```go
func ResetRetryCount()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetUrlDomain` <a name="ResetUrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain"></a>

```go
func ResetUrlDomain()
```

##### `ResetVpcChannelId` <a name="ResetVpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId"></a>

```go
func ResetVpcChannelId()
```

##### `ResetVpcChannelProxyHost` <a name="ResetVpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost"></a>

```go
func ResetVpcChannelProxyHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams">BackendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput">BackendParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput">EffectiveModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput">RequestProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput">RetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput">UrlDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput">VpcChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput">VpcChannelProxyHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol">RequestProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri">RequestUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount">RetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain">UrlDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId">VpcChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost">VpcChannelProxyHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendParams`<sup>Required</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams"></a>

```go
func BackendParams() ApigwApiV2HttpPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions"></a>

```go
func Conditions() ApigwApiV2HttpPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a>

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `BackendParamsInput`<sup>Optional</sup> <a name="BackendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput"></a>

```go
func BackendParamsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `EffectiveModeInput`<sup>Optional</sup> <a name="EffectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput"></a>

```go
func EffectiveModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput"></a>

```go
func RequestMethodInput() *string
```

- *Type:* *string

---

##### `RequestProtocolInput`<sup>Optional</sup> <a name="RequestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput"></a>

```go
func RequestProtocolInput() *string
```

- *Type:* *string

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() *string
```

- *Type:* *string

---

##### `RetryCountInput`<sup>Optional</sup> <a name="RetryCountInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput"></a>

```go
func RetryCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `UrlDomainInput`<sup>Optional</sup> <a name="UrlDomainInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput"></a>

```go
func UrlDomainInput() *string
```

- *Type:* *string

---

##### `VpcChannelIdInput`<sup>Optional</sup> <a name="VpcChannelIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput"></a>

```go
func VpcChannelIdInput() *string
```

- *Type:* *string

---

##### `VpcChannelProxyHostInput`<sup>Optional</sup> <a name="VpcChannelProxyHostInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput"></a>

```go
func VpcChannelProxyHostInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `EffectiveMode`<sup>Required</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode"></a>

```go
func EffectiveMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod"></a>

```go
func RequestMethod() *string
```

- *Type:* *string

---

##### `RequestProtocol`<sup>Required</sup> <a name="RequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol"></a>

```go
func RequestProtocol() *string
```

- *Type:* *string

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri"></a>

```go
func RequestUri() *string
```

- *Type:* *string

---

##### `RetryCount`<sup>Required</sup> <a name="RetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount"></a>

```go
func RetryCount() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `UrlDomain`<sup>Required</sup> <a name="UrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain"></a>

```go
func UrlDomain() *string
```

- *Type:* *string

---

##### `VpcChannelId`<sup>Required</sup> <a name="VpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId"></a>

```go
func VpcChannelId() *string
```

- *Type:* *string

---

##### `VpcChannelProxyHost`<sup>Required</sup> <a name="VpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost"></a>

```go
func VpcChannelProxyHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockOutputReference <a name="ApigwApiV2MockOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwApiV2MockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---


### ApigwApiV2MockPolicyBackendParamsList <a name="ApigwApiV2MockPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyBackendParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2MockPolicyBackendParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get"></a>

```go
func Get(index *f64) ApigwApiV2MockPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockPolicyBackendParamsOutputReference <a name="ApigwApiV2MockPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyBackendParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2MockPolicyBackendParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType">ResetSystemParamType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSystemParamType` <a name="ResetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```go
func ResetSystemParamType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput">SystemParamTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType">SystemParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SystemParamTypeInput`<sup>Optional</sup> <a name="SystemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```go
func SystemParamTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SystemParamType`<sup>Required</sup> <a name="SystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType"></a>

```go
func SystemParamType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockPolicyConditionsList <a name="ApigwApiV2MockPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2MockPolicyConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get"></a>

```go
func Get(index *f64) ApigwApiV2MockPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockPolicyConditionsOutputReference <a name="ApigwApiV2MockPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2MockPolicyConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName">ResetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetParamName` <a name="ResetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName"></a>

```go
func ResetParamName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput">ParamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `ParamNameInput`<sup>Optional</sup> <a name="ParamNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput"></a>

```go
func ParamNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockPolicyList <a name="ApigwApiV2MockPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2MockPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get"></a>

```go
func Get(index *f64) ApigwApiV2MockPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2MockPolicyOutputReference <a name="ApigwApiV2MockPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2MockPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2MockPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams">PutBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams">ResetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode">ResetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendParams` <a name="PutBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams"></a>

```go
func PutBackendParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetBackendParams` <a name="ResetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams"></a>

```go
func ResetBackendParams()
```

##### `ResetEffectiveMode` <a name="ResetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode"></a>

```go
func ResetEffectiveMode()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse"></a>

```go
func ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams">BackendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput">BackendParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput">EffectiveModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode">EffectiveMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendParams`<sup>Required</sup> <a name="BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams"></a>

```go
func BackendParams() ApigwApiV2MockPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions"></a>

```go
func Conditions() ApigwApiV2MockPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a>

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `BackendParamsInput`<sup>Optional</sup> <a name="BackendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput"></a>

```go
func BackendParamsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `EffectiveModeInput`<sup>Optional</sup> <a name="EffectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput"></a>

```go
func EffectiveModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `EffectiveMode`<sup>Required</sup> <a name="EffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode"></a>

```go
func EffectiveMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2RequestParamsList <a name="ApigwApiV2RequestParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2RequestParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwApiV2RequestParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get"></a>

```go
func Get(index *f64) ApigwApiV2RequestParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwApiV2RequestParamsOutputReference <a name="ApigwApiV2RequestParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwapiv2"

apigwapiv2.NewApigwApiV2RequestParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwApiV2RequestParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration">ResetEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough">ResetPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample">ResetSample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck">ResetValidityCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnumeration` <a name="ResetEnumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration"></a>

```go
func ResetEnumeration()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```

##### `ResetPassthrough` <a name="ResetPassthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough"></a>

```go
func ResetPassthrough()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetSample` <a name="ResetSample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample"></a>

```go
func ResetSample()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValidityCheck` <a name="ResetValidityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck"></a>

```go
func ResetValidityCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput">EnumerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput">PassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput">SampleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput">ValidityCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration">Enumeration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough">Passthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample">Sample</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck">ValidityCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumerationInput`<sup>Optional</sup> <a name="EnumerationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput"></a>

```go
func EnumerationInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PassthroughInput`<sup>Optional</sup> <a name="PassthroughInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput"></a>

```go
func PassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SampleInput`<sup>Optional</sup> <a name="SampleInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput"></a>

```go
func SampleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidityCheckInput`<sup>Optional</sup> <a name="ValidityCheckInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput"></a>

```go
func ValidityCheckInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enumeration`<sup>Required</sup> <a name="Enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration"></a>

```go
func Enumeration() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Passthrough`<sup>Required</sup> <a name="Passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough"></a>

```go
func Passthrough() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Sample`<sup>Required</sup> <a name="Sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample"></a>

```go
func Sample() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidityCheck`<sup>Required</sup> <a name="ValidityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck"></a>

```go
func ValidityCheck() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



